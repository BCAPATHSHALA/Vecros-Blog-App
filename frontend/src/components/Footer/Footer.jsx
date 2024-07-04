import { Flex, Text, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    href: "https://github.com/BCAPATHSHALA",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/manojoffcialmj/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://leetcode.com/manojofficialmj",
    label: "LeetCode",
    icon: SiLeetcode,
  },
  {
    href: "https://twitter.com/manojofficialmj",
    label: "Twitter",
    icon: FaTwitter,
  },
  {
    href: "https://www.instagram.com/manojofficialmj/",
    label: "Instagram",
    icon: FaInstagram,
  },
];

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      py={{ base: "2", md: "4" }}
      bg="#0D1B2A"
      direction={"column"}
      textAlign="center"
      width="100%"
      gap={2}
    >
      <Text fontSize={{ base: "10", md: "16" }} mb={{ base: 2, md: 0 }}>
        &copy; 2024 Console Busters. All rights reserved.
      </Text>
      <HStack spacing={4} ml={{ md: 4 }}>
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            isExternal
            _hover={{ transform: "scale(1.2)", transition: "0.2s" }}
          >
            <Icon as={link.icon} boxSize={{ base: 4, md: 6 }} />
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};

export default Footer;
