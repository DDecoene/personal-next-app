
import { Box, Center, chakra, Container } from "@chakra-ui/react";
import { Layout, ExperienceItem } from "@components";
import { Experience } from "@data";
import { useRouter } from "next/router";
import useSWR from 'swr'

import title from 'title';


const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ITExperience() {

    const router = useRouter()
    const { data, error } = useSWR('/api/experience', fetcher)
    const { category } = router.query

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    if (!category) return <div>No category</div>

    const captitle=`${title(category.toString())} Experience`
    
    return (
        <>
            <Layout title={captitle}>
                <Box as={Container} maxW="7xl" mt={14} p={4}>
                    <Center>
                        <chakra.h1
                            fontSize="7xl"
                            fontWeight="400"
                            color="blue.500"
                            mb={20}
                        >{captitle}</chakra.h1>
                    </Center>
                    {data.filter((e: Experience) => (e.category == category)).map((e: Experience, i: number) => (
                        <ExperienceItem key={i} experience={e} />
                    ))}
                </Box>
            </Layout>
        </>
    )
}