import {
    Flex, Text,
    Stack, Link
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
    link?: string;
}

export const Feature = ({ text, icon, iconBg, link }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>
                {link ?
                    <Link href={link} isExternal>
                        {text}
                    </Link>
                    : text}
            </Text>
        </Stack>
    );
};
