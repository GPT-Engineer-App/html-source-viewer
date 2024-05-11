import { useState } from "react";
import { Container, VStack, Textarea, Button, Box, Text, Input, Flex, IconButton } from "@chakra-ui/react";
import { FaEye, FaCode, FaMousePointer, FaSave } from "react-icons/fa";

const Index = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [variableName, setVariableName] = useState("");
  const [templateCode, setTemplateCode] = useState("");

  const handleHtmlChange = (e) => {
    setHtmlCode(e.target.value);
  };

  const handleVariableNameChange = (e) => {
    setVariableName(e.target.value);
  };

  const handleElementSelect = () => {
    // Simulate element selection
    setSelectedElement("div");
  };

  const handleVariableAssign = () => {
    const newTemplateCode = htmlCode.replace(`<${selectedElement}>`, `{{ ${variableName} }}`);
    setTemplateCode(newTemplateCode);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={4}>
        <Textarea placeholder="Paste your HTML code here..." value={htmlCode} onChange={handleHtmlChange} size="lg" height="200px" />
        <Flex gap="2">
          <IconButton icon={<FaEye />} aria-label="Preview HTML" size="lg" />
          <IconButton icon={<FaCode />} aria-label="View Source" size="lg" onClick={handleElementSelect} />
          <IconButton icon={<FaMousePointer />} aria-label="Select Element" size="lg" />
        </Flex>
        <Box borderWidth="1px" p={4} width="full">
          <Text mb={2}>
            Selected Element:{" "}
            <Text as="span" fontWeight="bold">
              {selectedElement || "None"}
            </Text>
          </Text>
          <Input placeholder="Variable name" value={variableName} onChange={handleVariableNameChange} />
          <Button mt={2} leftIcon={<FaSave />} colorScheme="blue" onClick={handleVariableAssign}>
            Assign Variable
          </Button>
        </Box>
        <Textarea placeholder="Generated Template Code..." value={templateCode} size="lg" height="200px" isReadOnly />
      </VStack>
    </Container>
  );
};

export default Index;
