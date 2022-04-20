import { Group, Path, Shape, Surface } from "@react-native-community/art";
import PropTypes from "prop-types";
import React from "react";

export const createPath = (
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  arcAngle: number,
  isBezian: undefined,
  innerRadius: number | undefined,
) => {
  const p = new Path();
  //starting point of our chart
  if (isBezian) {
    const roundnessOutside =
      1 - (r - innerRadius) / innerRadius - arcAngle * 0.5;
    const roundnessInside =
      1 + (r - innerRadius) / innerRadius + arcAngle * 0.5;
    const pullback = 0.1;
    const anchorForward = 0.2;
    //This is for the part that is the divider
    p.moveTo(
      cx + r * roundnessOutside * Math.cos(startAngle + pullback),
      cy + r * roundnessOutside * Math.sin(startAngle + pullback),
    );
    p.onBezierCurve(
      undefined,
      undefined,
      cx + r * roundnessOutside * Math.cos(startAngle + pullback),
      cy + r * roundnessOutside * Math.sin(startAngle + pullback),
      cx + r * Math.cos(startAngle + anchorForward),
      cy + r * Math.sin(startAngle + anchorForward),
      cx + r * roundnessInside * Math.cos(startAngle + pullback),
      cy + r * roundnessInside * Math.sin(startAngle + pullback),
    );
  } else {
    //This is for the main arc of the pie chart
    p.moveTo(cx + r * Math.cos(startAngle), cy + r * Math.sin(startAngle));
    p.onArc(
      undefined,
      undefined,
      undefined,
      undefined,
      cx,
      cy,
      r,
      r,
      startAngle,
      startAngle + arcAngle,
    );
  }
  return p;
};

const ArcShape = ({
  dimensions,
  color,
  strokeCap,
  startAngle,
  arcAngle,
  isBezian,
}: {
  dimensions: any;
  color: string;
  strokeCap: any;
  startAngle: any;
  arcAngle: any;
  isBezian: any;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { radius, innerRadius, width, dividerSize } = dimensions;
  const path = createPath(
    radius,
    radius,
    radius - width / 2,
    (startAngle / 180) * Math.PI,
    (arcAngle / 180) * Math.PI,
    isBezian,
    innerRadius,
  );
  const strokeWidth = isBezian ? arcAngle * 5 : width;
  return (
    <Shape
      d={path}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeCap={strokeCap}
    />
  );
};

//The initial band to set the backgroundColor behind the pie chart
const Background = ({ dimensions, color }: { dimensions: any; color: any }) => {
  return (
    <ArcShape
      dimensions={dimensions}
      color={color}
      startAngle={0}
      arcAngle={360}
      strokeCap={undefined}
      isBezian={undefined}
    />
  );
};

const getArcAngle = (percentage: number) => (percentage / 100) * 360;
const shouldShowDivider = (sections: string | any[], dividerSize: unknown) =>
  sections.length > 1 && !Number.isNaN(dividerSize);

const Sections = ({
  dimensions,
  paintedSections,
  sections,
  shouldShowRoundDividers,
  strokeCapForLargeBands,
}: {
  dimensions: any;
  paintedSections: any;
  sections: any;
  shouldShowRoundDividers: any;
  strokeCapForLargeBands: any;
}) => {
  let startValue = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { radius, width, dividerSize } = dimensions;
  const showDividers = shouldShowDivider(sections, dividerSize);
  paintedSections = sections.map(
    (
      section: { percentage: any; color: any },
      idx: React.Key | null | undefined,
    ) => {
      const { percentage, color } = section;
      const startAngle = (startValue / 100) * 360;
      const arcAngle = getArcAngle(percentage);
      startValue += percentage;
      shouldShowRoundDividers &&
        paintedSections.push({ percentage, color, startAngle, arcAngle });
      return (
        <ArcShape
          key={idx}
          dimensions={dimensions}
          color={color}
          startAngle={showDividers ? startAngle + dividerSize : startAngle}
          arcAngle={showDividers ? arcAngle - dividerSize : arcAngle}
          strokeCap={strokeCapForLargeBands}
          isBezian={undefined}
        />
      );
    },
  );
  return paintedSections;
};

// These are the rounded dividers when strokeCap='round'
const RoundDividers = ({
  dimensions,
  paintedSections,
  backgroundColor,
  visible,
}: {
  dimensions: any;
  paintedSections: any;
  backgroundColor: any;
  visible: boolean;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { dividerSize, radius, innerRadius, width } = dimensions;
  const dividerOffSet = dividerSize * 2 + 6;
  const strokeCap = "butt";
  const isBezian = true;
  let dividerColorOverlayArray: {} | null | undefined = [];
  let dividerArray: {} | null | undefined = [];

  if (paintedSections.length > 1 && visible) {
    paintedSections.forEach(
      (
        section: { arcAngle?: any; color?: any; startAngle?: any },
        index: React.Key | null | undefined,
      ) => {
        const { color, startAngle } = section;

        for (let i = 0; i < dividerSize + 2; i++) {
          dividerArray?.push(
            <ArcShape
              key={index}
              dimensions={dimensions}
              color={backgroundColor}
              startAngle={
                startAngle + section.arcAngle + dividerSize + i - dividerOffSet
              }
              arcAngle={1}
              isBezian={isBezian}
              strokeCap={strokeCap}
            />,
          );
          dividerColorOverlayArray?.push(
            <ArcShape
              key={index}
              dimensions={dimensions}
              color={color}
              startAngle={
                startAngle + section.arcAngle - dividerSize + i - dividerOffSet
              }
              arcAngle={1}
              isBezian={isBezian}
              strokeCap={strokeCap}
            />,
          );
        }
      },
    );
  }
  return (
    <Group>
      {dividerArray}
      {dividerColorOverlayArray}
    </Group>
  );
};

// These circles clean up the strokes left over from the bezian curves
const CleanUpCircles = ({
  dimensions,
  backgroundColor,
  visible,
}: {
  dimensions: any;
  backgroundColor: string;
  visible: boolean;
}) => {
  const { radius, innerRadius, width } = dimensions;
  const innerBackgroundPath = createPath(
    radius,
    radius,
    innerRadius - width / 2,
    0,
    360,
    undefined,
    undefined,
  );
  const outerBackgroundPath = createPath(
    radius,
    radius,
    radius + width / 2,
    0,
    360,
    undefined,
    undefined,
  );
  if (width < 100 && visible) {
    return (
      <>
        <Shape
          d={innerBackgroundPath}
          stroke={backgroundColor}
          strokeWidth={width}
        />
        <Shape
          d={outerBackgroundPath}
          stroke={backgroundColor}
          strokeWidth={width}
        />
      </>
    );
  }
  return null;
};

const Pie = ({
  sections,
  radius,
  innerRadius,
  backgroundColor,
  strokeCap,
  dividerSize,
  strokeCapForLargeBands,
}: {
  sections: any;
  radius: any;
  innerRadius: any;
  backgroundColor: any;
  strokeCap: any;
  dividerSize: any;
  strokeCapForLargeBands: any;
}) => {
  strokeCapForLargeBands =
    dividerSize > 0 || strokeCap == "butt" ? "butt" : "butt";
  const shouldShowRoundDividers = strokeCap === "round";
  let paintedSections: never[] = [];

  // This is the width for the arc
  const width = radius - innerRadius;
  const dimensions = { radius, innerRadius, width, dividerSize };

  return (
    <Surface width={radius * 2} height={radius * 2}>
      <Group rotation={-90} originX={radius} originY={radius}>
        <Background dimensions={dimensions} color={backgroundColor} />
        <Sections
          dimensions={dimensions}
          paintedSections={paintedSections}
          sections={sections}
          strokeCapForLargeBands={strokeCapForLargeBands}
          shouldShowRoundDividers={shouldShowRoundDividers}
        />
        <RoundDividers
          dimensions={dimensions}
          paintedSections={paintedSections}
          backgroundColor={backgroundColor}
          visible={shouldShowRoundDividers}
        />
        <CleanUpCircles
          dimensions={dimensions}
          backgroundColor={backgroundColor}
          visible={shouldShowRoundDividers}
        />
      </Group>
    </Surface>
  );
};

export default Pie;

Pie.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.exact({
      percentage: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  radius: PropTypes.number.isRequired,
  innerRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  strokeCap: PropTypes.string,
  dividerSize: PropTypes.number,
};

Pie.defaultProps = {
  dividerSize: 0,
  innerRadius: 0,
  backgroundColor: "#fff",
  strokeCap: "butt",
};
