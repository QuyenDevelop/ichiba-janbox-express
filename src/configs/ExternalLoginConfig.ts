import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { IdentityServerConfig } from "./IdentityServerConfig";

export function ConfigureGoogleSign(): void {
  GoogleSignin.configure({
    webClientId: IdentityServerConfig.webClientId,
    offlineAccess: false,
  });
}
