import React from "react";
import Button from "../components/Button/Button";
import { ReactComponent as TestIcon } from "../assets/cross.svg";
import Layout from "../layouts/Layout";
import { ALink } from "../styles/components";

const TestPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Button>Primary</Button>
        <Button buttonSize="md">Primary md</Button>

        <Button disabled icon={<TestIcon />}>
          Icon test disabled: left
        </Button>

        <Button disabled action="secondary" icon={<TestIcon />}>
          Icon test disabled: left
        </Button>

        <Button icon={<TestIcon />} iconPosition="right">
          Icon test: right
        </Button>

        <Button hasOnlyIcon={true}>
          <TestIcon />
        </Button>

        <Button action="secondary" hasOnlyIcon>
          <TestIcon />
        </Button>

        <Button action="secondary">Secondary</Button>
        <Button action="secondary" buttonSize="md">
          Secondary Md
        </Button>
        <Button action="secondary" icon={<TestIcon />}>
          Icon test: left
        </Button>
        <Button action="secondary" icon={<TestIcon />} iconPosition="right">
          Icon test: right
        </Button>

        <ALink href="#">Hello world</ALink>
        <ALink href="#">Second link</ALink>
      </div>
    </Layout>
  );
};

export default TestPage;
