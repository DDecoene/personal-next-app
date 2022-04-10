import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2022 Dennis Decoene. Heavily inspired by&nbsp;
                    <Link href='https://chakra-ui.com' isExternal>
                        Chakra Design system <ExternalLinkIcon mx='2px' />
                    </Link> and&nbsp;
                    <Link href='https://chakra-templates.dev/' isExternal>Chakra Templates<ExternalLinkIcon mx='2px' />
                    </Link>. All rights reserved
                </Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/DDecoene'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'https://www.youtube.com/c/DennisDecoene'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Reddit'} href={'https://www.reddit.com/user/MidnightBolt'}>
                        <FaReddit />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}