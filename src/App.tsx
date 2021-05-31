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
  IconButton,
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon, PhoneIcon } from '@chakra-ui/icons'

const DEFAULT_VALUE = 0
const MAX_VALUE = 99999999

function App() {
  const [value, setValue] = useState(DEFAULT_VALUE)
  const valueString = value.toString().padStart(8, '0')

  return (
    <div className="App">
      <ChakraProvider resetCSS>
        <Container>
          <VisuallyHidden>
            <Heading as="h1">전화번호 입력 테스트</Heading>
          </VisuallyHidden>
          <Center>
            <Box w="319px" h="636px" paddingTop="40px" backgroundImage="url('/phone.jpg')" backgroundSize="cover" backgroundRepeat="no-repeat" position="relative">
              <Box textColor="white" position="absolute" left="50%" transform="translateX(-50%)" top="200px">
                <Text fontSize="22px">010-{valueString.substring(0, 4)}-{valueString.substring(4, 8)}</Text>
              </Box>
              <Box w="200px" position="absolute" top="250px" left="50%" transform="translateX(-50%)">
                <Slider aria-label="phone-number" size="lg" defaultValue={value} min={0} max={MAX_VALUE} step={1} onChange={nextValue => setValue(nextValue)} marginTop="24px">
                  <SliderTrack bgColor="twitter">
                    <SliderFilledTrack bgColor="twitter" />
                  </SliderTrack>
                  <SliderThumb boxSize={6}>
                    <Box color="twitter" as={PhoneIcon} />
                  </SliderThumb>
                </Slider>
                <Box display="flex" justifyContent="center">
                  <IconButton icon={<ArrowDownIcon />} aria-label="phone number down icon" size="lg" marginRight="16px"
                    onClick={() => {
                      if (value > 0) {
                        setValue(value - 1)
                      }
                    }}
                  />
                  <IconButton icon={<ArrowUpIcon />} aria-label="phone number up icon" size="lg"
                    onClick={() => {
                      if (value < MAX_VALUE) {
                        setValue(value + 1)}
                      }
                    }
                  />
                </Box>
              </Box>
            </Box>
          </Center>
        </Container>
      </ChakraProvider>
    </div>
  );
}

export default App;
