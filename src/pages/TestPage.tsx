import React from "react";
import { ReactComponent as TestIcon } from "../assets/cross.svg";
import Button from "../components/Button/Button";
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
        <Button size="md">Primary md</Button>

        <Button disabled icon={<TestIcon />}>
          Icon test disabled: left
        </Button>

        <Button disabled action="secondary" icon={<TestIcon />}>
          Icon test disabled: left
        </Button>

        <Button icon={<TestIcon />} iconPosition="right">
          Icon test: right
        </Button>

        <Button hasOnlyIcon size="md">
          <TestIcon />
        </Button>

        <Button action="secondary" hasOnlyIcon>
          <TestIcon />
        </Button>

        <Button action="primary" size="sm">
          Long description button, <br />
          let's test it, another string
        </Button>

        <Button action="primary" size="md">
          Long description button, <br />
          let's test it, another string
        </Button>

        <Button action="secondary" size="md" hasOnlyIcon>
          <TestIcon />
        </Button>

        <Button action="secondary">Secondary</Button>
        <Button action="secondary" size="md">
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
