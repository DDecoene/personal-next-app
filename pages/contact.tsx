import { Container, Flex, Heading, Icon, SimpleGrid, Stack, StackDivider, Text, useColorModeValue, Image } from "@chakra-ui/react";
import { FaEthereum, FaDiscord, FaReddit, FaYoutube } from "react-icons/fa";
import { IoLogoBitcoin } from "react-icons/io5";
import { Layout, Feature } from "../components";

export default function ContactPage() {
  return (
    <>
      <Layout title='Contact'>
      <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        My contact info
                    </Text>
                    <Heading>Get in touch</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Get in touch with me through any of the following resources:
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={FaEthereum} color={'gray.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('gray.100', 'gray.900')}
                            text={'Address: DDecoene.eth'}
                        />
                        <Feature
                            icon={<Icon as={IoLogoBitcoin} color={'orange.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('orange.100', 'orange.900')}
                            text={'Address: 3NSpr1cnGe41db1prBksdnLEU27WvKK4x9'} />
                        <Feature
                            icon={<Icon as={FaDiscord} color={'purple.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'The Midnight Bolt'}
                            link={'https://discord.gg/YzXQZj'} />

                        <Feature
                            icon={<Icon as={FaReddit} color={'red.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('red.100', 'red.900')}
                            text={'MidnightBolt'}
                            link={'https://www.reddit.com/r/MidnightBolt/'} />
                        <Feature
                            icon={<Icon as={FaYoutube} color={'red.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('red.100', 'red.900')}
                            text={'Channel'}
                            link={'https://www.youtube.com/channel/UCWl-Qs5lQ9lROuwN8kY2E6g'} />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
      </Layout>
    </>
  )
}