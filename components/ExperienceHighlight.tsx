import { GridItem } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";

interface Props {
    heading: string
    text: string
    key: number
}

export default function ExperienceHighlight({ heading, text, key }: Props) {
    return (
        <>
            <GridItem key={key}>
                <chakra.h3 fontSize="xl" fontWeight="600">
                    {heading}
                </chakra.h3>
                <chakra.p>{text}</chakra.p>
            </GridItem>
        </>
    )
}
