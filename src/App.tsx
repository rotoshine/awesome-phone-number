import React, { useState } from 'react';
import {
  ChakraProvider,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  Box,
  Text,
  Container,
  Heading,
  Center,
  VisuallyHidden,
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

const DEFAULT_VALUE = 1000000000

function App() {
  const [value, setValue] = useState(DEFAULT_VALUE)
  return (
    <div className="App">
      <ChakraProvider resetCSS>
        <Container>
          <VisuallyHidden>
            <Heading as="h1">전화번호 입력 테스트</Heading>
          </VisuallyHidden>
          <Center>
            <Box w="319px" h="636px" paddingTop="40px" backgroundImage="url('/phone.jpg')" backgroundSize="cover" backgroundRepeat="no-repeat" position="relative">
              <Box w="200px" position="absolute" top="250px" left="50%" transform="translateX(-50%)">
                <Slider aria-label="phone-number" size="lg" defaultValue={DEFAULT_VALUE} min={1000000000} max={1099999999} step={1} onChange={nextValue => setValue(nextValue)} marginTop="24px">
                  <SliderTrack bgColor="twitter">
                    <SliderFilledTrack bgColor="twitter" />
                  </SliderTrack>
                  <SliderThumb boxSize={6}>
                    <Box color="twitter" as={PhoneIcon} />
                  </SliderThumb>
                </Slider>
              </Box>
              <Box textColor="white" position="absolute" left="50%" transform="translateX(-50%)" top="200px">
                <Text fontSize="22px">0{value.toString().substring(0, 2)}-{value.toString().substring(2, 6)}-{value.toString().substring(6, 10)}</Text>
              </Box>
            </Box>
          </Center>
        </Container>
      </ChakraProvider>
    </div>
  );
}

export default App;
