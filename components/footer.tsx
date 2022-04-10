import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SocialButton } from './SocialButton';

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
                <Text>© 2022 Dennis Decoene. All rights reserved
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