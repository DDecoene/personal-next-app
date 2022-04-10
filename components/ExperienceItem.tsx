import { Box, Container, Grid, GridItem, VStack, Button, Flex, Divider } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import { Experience } from "@data";
import { IoChevronForwardOutline } from "react-icons/io5";
import ExperienceHighlight from "./ExperienceHighlight";

interface Props {
    experience: Experience;
    index?: number;
}

export function ExperienceItem({ experience, index }: Props) {
    return (
        <>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                }}
                gap={4}>
                <GridItem colSpan={1}>
                    <VStack alignItems="flex-start" spacing="20px">
                        <chakra.h2 fontSize="3xl" fontWeight="700">
                            {experience.title}
                        </chakra.h2>
                        <chakra.h3>
                            {experience.company}: {experience.startDate}
                            <IoChevronForwardOutline style={{ display: "inline-block", verticalAlign: "middle" }} />
                            {experience.endDate}
                        </chakra.h3>
                        <Button colorScheme="green" size="md">
                            More info
                        </Button>
                    </VStack>
                </GridItem>
                <GridItem>
                    <Flex>
                        <chakra.p>
                            {experience.description}
                        </chakra.p>
                    </Flex>
                </GridItem>
            </Grid>
            <Divider mt={12} mb={12} />
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={{ base: '8', sm: '12', md: '16' }}>
                {experience.highlights.map((highlight, index) => (
                    <ExperienceHighlight heading={highlight.title} text={highlight.description} key={index} />
                ))}
            </Grid>
        </>

    );
}