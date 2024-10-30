import { HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Stack gap={2} maxW={"xs"}>
      <HStack width={"full"}>
        <hr className="w-full" />
        <SkeletonText noOfLines={2} />
      </HStack>
      <Skeleton height="60px" />
    </Stack>
  );
};

export default Loading;
