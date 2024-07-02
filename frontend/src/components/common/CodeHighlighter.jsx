import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import "highlight.js/styles/atom-one-dark.css";
import {
  Center,
  Button,
  Tooltip,
  Box,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { RiFileCopyLine } from "react-icons/ri";

const CodeHighlighter = ({ children }) => {
  const codeRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children]);

  const handleCopyClick = () => {
    if (codeRef.current) {
      navigator.clipboard
        .writeText(codeRef.current.textContent)
        .then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 5000);
        })
        .catch(() => setCopySuccess(false));
    }
  };

  return (
    <Center>
      <Box position="relative" style={{ maxWidth: "100%" }}>
        <VStack bg={"gray.700"} p={2} borderRadius={10}>
          <HStack justifyContent={"space-between"} width={"full"}>
            {/* Copy Button */}
            <Tooltip
              label={copySuccess ? "Copied!" : "Copy code"}
              placement="top"
            >
              <Button onClick={handleCopyClick} leftIcon={<RiFileCopyLine />}>
                {copySuccess ? "Copied" : "Copy"}
              </Button>
            </Tooltip>
            <Text fontSize={"0.5rem"}>Vecros Blog Application</Text>
          </HStack>

          {/* Code Block*/}
          <pre
            style={{
              maxWidth: "100%",
              overflowX: "auto",
              border: "1px solid teal",
              borderRadius: "10px",
              backgroundColor: "#2d3746",
            }}
          >
            <code
              ref={codeRef}
              className={`language-go`}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {children}
            </code>
          </pre>
        </VStack>
      </Box>
    </Center>
  );
};

export default CodeHighlighter;
