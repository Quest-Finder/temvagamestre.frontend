import { keysFieldValues } from "../types/social-network";
import { socialNetworkValidation } from "./social-network-registration-validation";


type SocialValidation = {
    name: keysFieldValues;
};

export function parseSocialValidationInArray(): SocialValidation[] {
    return Object.entries(socialNetworkValidation.shape).map(([name]) => ({
        name: name as keysFieldValues,
    }))
}