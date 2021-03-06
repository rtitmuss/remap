import { IFirmwareCodePlace, IKeyboardsPhase } from '../store/state';
import { KeyboardDefinitionSchema } from '../gen/types/KeyboardDefinition';
import { IKeyboardDefinitionDocument } from '../services/storage/Storage';

export const KEYBOARDS_APP_ACTIONS = '@FIXME!App'; // FIXME!
export const KEYBOARDS_APP_UPDATE_PHASE = `${KEYBOARDS_APP_ACTIONS}/UpdatePhase`;
export const KeyboardsAppActions = {
  updatePhase: (phase: IKeyboardsPhase) => {
    return {
      type: KEYBOARDS_APP_UPDATE_PHASE,
      value: phase,
    };
  },
};

export const KEYBOARDS_CREATE_DEFINITION_ACTIONS = '@FIXME!CreateDefinition'; // FIXME!
export const KEYBOARDS_CREATE_DEFINITION_CLEAR = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/Clear`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_JSON_FILENAME = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/UpdateJsonFilename`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_JSON_STRING = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/UpdateJsonString`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_KEYBOARD_DEFINITION = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/UpdateKeyboardDefinition`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_PRODUCT_NAME = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/UpdateProductName`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_AGREEMENT = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/UpdateAgreement`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_FIRMWARE_CODE_PLACE = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/FirmwareCodePlace`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_FORKED_REPOSITORY_URL = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/ForkedRepositoryUrl`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_FORKED_REPOSITORY_EVIDENCE = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/ForkedRepositoryEvidence`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_OTHER_PLACE_HOW_TO_GET = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/OtherPlaceHowToGet`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_OTHER_PLACE_SOURCE_CODE_EVIDENCE = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/OtherPlaceSourceCodeEvidence`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_OTHER_PLACE_PUBLISHER_EVIDENCE = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/OtherPlacePublisherEvidence`;
export const KEYBOARDS_CREATE_DEFINITION_UPDATE_QMK_REPOSITORY_FIRST_PULL_REQUEST_URL = `${KEYBOARDS_CREATE_DEFINITION_ACTIONS}/QmkRepositoryFirstPullRequestUrl`;
export const KeyboardsCreateDefinitionActions = {
  clear: () => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_CLEAR,
    };
  },
  updateJsonFilename: (jsonFilename: string) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_JSON_FILENAME,
      value: jsonFilename,
    };
  },
  updateJsonString: (jsonStr: string) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_JSON_STRING,
      value: jsonStr,
    };
  },
  updateKeyboardDefinition: (keyboardDefinition: KeyboardDefinitionSchema) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_KEYBOARD_DEFINITION,
      value: keyboardDefinition,
    };
  },
  updateProductName: (productName: string) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_PRODUCT_NAME,
      value: productName,
    };
  },
  updateAgreement: (agreement: boolean) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_AGREEMENT,
      value: agreement,
    };
  },
  updateFirmwareCodePlace: (firmwareCodePlace: IFirmwareCodePlace) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_FIRMWARE_CODE_PLACE,
      value: firmwareCodePlace,
    };
  },
  updateForkedRepositoryUrl: (forkedRepositoryUrl: string) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_FORKED_REPOSITORY_URL,
      value: forkedRepositoryUrl,
    };
  },
  updateForkedRepositoryEvidence: (forkedRepositoryEvidence: string) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_FORKED_REPOSITORY_EVIDENCE,
      value: forkedRepositoryEvidence,
    };
  },
  updateOtherPlaceHowToGet: (otherPlaceHowToGet: string) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_OTHER_PLACE_HOW_TO_GET,
      value: otherPlaceHowToGet,
    };
  },
  updateOtherPlaceSourceCodeEvidence: (
    otherPlaceSourceCodeEvidence: string
  ) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_OTHER_PLACE_SOURCE_CODE_EVIDENCE,
      value: otherPlaceSourceCodeEvidence,
    };
  },
  updateOtherPlacePublisherEvidence: (otherPlacePublisherEvidence: string) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_OTHER_PLACE_PUBLISHER_EVIDENCE,
      value: otherPlacePublisherEvidence,
    };
  },
  updateQmkRepositoryFirstPullRequestUrl: (
    qmkRepositoryFirstPullRequestUrl: string
  ) => {
    return {
      type: KEYBOARDS_CREATE_DEFINITION_UPDATE_QMK_REPOSITORY_FIRST_PULL_REQUEST_URL,
      value: qmkRepositoryFirstPullRequestUrl,
    };
  },
};

export const KEYBOARDS_EDIT_DEFINITION_ACTIONS = '@FIXME!EditDefinition'; // FIXME!
export const KEYBOARDS_EDIT_DEFINITION_CLEAR = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/Clear`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_JSON_FILENAME = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/UpdateJsonFilename`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_JSON_STRING = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/UpdateJsonString`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_KEYBOARD_DEFINITION = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/UpdateKeyboardDefinition`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_PRODUCT_NAME = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/UpdateProductName`;
export const KEYBOARDS_EDIT_DEFINITION_INIT = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/Init`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_AGREEMENT = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/UpdateAgreement`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_FIRMWARE_CODE_PLACE = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/FirmwareCodePlace`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_FORKED_REPOSITORY_URL = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/ForkedRepositoryUrl`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_FORKED_REPOSITORY_EVIDENCE = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/ForkedRepositoryEvidence`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_OTHER_PLACE_HOW_TO_GET = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/OtherPlaceHowToGet`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_OTHER_PLACE_SOURCE_CODE_EVIDENCE = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/OtherPlaceSourceCodeEvidence`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_OTHER_PLACE_PUBLISHER_EVIDENCE = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/OtherPlacePublisherEvidence`;
export const KEYBOARDS_EDIT_DEFINITION_UPDATE_QMK_REPOSITORY_FIRST_PULL_REQUEST_URL = `${KEYBOARDS_EDIT_DEFINITION_ACTIONS}/QmkRepositoryFirstPullRequestUrl`;
export const KeyboardsEditDefinitionActions = {
  clear: () => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_CLEAR,
    };
  },
  init: (keyboardDefinitionDocument: IKeyboardDefinitionDocument) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_INIT,
      value: keyboardDefinitionDocument,
    };
  },
  updateJsonFilename: (jsonFilename: string) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_JSON_FILENAME,
      value: jsonFilename,
    };
  },
  updateJsonString: (jsonStr: string) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_JSON_STRING,
      value: jsonStr,
    };
  },
  updateKeyboardDefinition: (keyboardDefinition: KeyboardDefinitionSchema) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_KEYBOARD_DEFINITION,
      value: keyboardDefinition,
    };
  },
  updateProductName: (productName: string) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_PRODUCT_NAME,
      value: productName,
    };
  },
  updateAgreement: (agreement: boolean) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_AGREEMENT,
      value: agreement,
    };
  },
  updateFirmwareCodePlace: (firmwareCodePlace: IFirmwareCodePlace) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_FIRMWARE_CODE_PLACE,
      value: firmwareCodePlace,
    };
  },
  updateForkedRepositoryUrl: (forkedRepositoryUrl: string) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_FORKED_REPOSITORY_URL,
      value: forkedRepositoryUrl,
    };
  },
  updateForkedRepositoryEvidence: (forkedRepositoryEvidence: string) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_FORKED_REPOSITORY_EVIDENCE,
      value: forkedRepositoryEvidence,
    };
  },
  updateOtherPlaceHowToGet: (otherPlaceHowToGet: string) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_OTHER_PLACE_HOW_TO_GET,
      value: otherPlaceHowToGet,
    };
  },
  updateOtherPlaceSourceCodeEvidence: (
    otherPlaceSourceCodeEvidence: string
  ) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_OTHER_PLACE_SOURCE_CODE_EVIDENCE,
      value: otherPlaceSourceCodeEvidence,
    };
  },
  updateOtherPlacePublisherEvidence: (otherPlacePublisherEvidence: string) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_OTHER_PLACE_PUBLISHER_EVIDENCE,
      value: otherPlacePublisherEvidence,
    };
  },
  updateQmkRepositoryFirstPullRequestUrl: (
    qmkRepositoryFirstPullRequestUrl: string
  ) => {
    return {
      type: KEYBOARDS_EDIT_DEFINITION_UPDATE_QMK_REPOSITORY_FIRST_PULL_REQUEST_URL,
      value: qmkRepositoryFirstPullRequestUrl,
    };
  },
};
