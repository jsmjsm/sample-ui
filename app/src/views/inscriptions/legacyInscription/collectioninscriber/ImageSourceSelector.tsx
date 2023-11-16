import { Button, HStack, VStack } from "@chakra-ui/react";
import { PublicKey } from "@solana/web3.js";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
    CustomImageUploader,
    IImageUploaderState,
} from "./CustomImageUploader";
import { OffchainUploader } from "./OffchainUploader";
import { IImageUploadProgressState } from "./useImageUploadProgressState";

export interface IImageSourceState {
  imageBuffer: Buffer | undefined;
  setImageBuffer: Dispatch<SetStateAction<Buffer | undefined>>;
}

export const useImageSourceState = (): IImageSourceState => {
  const [imageBuffer, setImageBuffer] = useState<Buffer>();

  return { imageBuffer, setImageBuffer };
};

enum SourceType {
  OffChain,
  Custom,
}

interface ISourceSelectorProps {
  sourceType: SourceType;
  setSourceType: Dispatch<SetStateAction<SourceType>>;
}

export const useSourceSelectorState = (): ISourceSelectorProps => {
  const [sourceType, setSourceType] = useState<SourceType>(SourceType.OffChain);

  return { sourceType, setSourceType };
};

export const SourceSelector = (props: ISourceSelectorProps) => {
  return (
    <HStack>
      <Button
        colorScheme="teal"
        onClick={() => {
          props.setSourceType(SourceType.OffChain);
        }}
        variant={props.sourceType === SourceType.OffChain ? "solid" : "outline"}
      >
        Original
      </Button>
      <Button
        colorScheme="teal"
        onClick={() => {
          props.setSourceType(SourceType.Custom);
        }}
        variant={props.sourceType === SourceType.Custom ? "solid" : "outline"}
      >
        Custom
      </Button>
    </HStack>
  );
};

export const ImageSourceSelector = (props: {
  mint: PublicKey;
  state: IImageUploaderState;
  progressState: IImageUploadProgressState;
  allowCustom: boolean;
}) => {
  const sourceSelectorState = useSourceSelectorState();

  return (
    <VStack>
      {props.allowCustom && <SourceSelector {...sourceSelectorState} />}
      {sourceSelectorState.sourceType === SourceType.Custom ? (
        <CustomImageUploader
          mint={props.mint}
          state={props.state}
          progressState={props.progressState}
        />
      ) : (
        <OffchainUploader
          mint={props.mint}
          state={props.state}
          progressState={props.progressState}
        />
      )}
    </VStack>
  );
};
