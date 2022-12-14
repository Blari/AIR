import React from 'react';
import {
  Row,
  Col,
  Button,
  Badge,
} from 'reactstrap';

import Widget from '../../../components/Widget';

const Badges = () => (
  <div>
    <h1 className="page-title">Badge</h1>
    <Row>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Badge <span className="fw-semi-bold">Example</span></h5>}
          close collapse
        >
          <p className="mb-md">
            Badges scale to match the size of the immediate parent element by
            using relative font sizing and em units.
          </p>
          <h1>Example heading <Badge className="me-2" color="primary">Primary</Badge></h1>
          <h2>Example heading <Badge className="me-2" color="info">Info</Badge></h2>
          <h3>Example heading <Badge className="me-2" color="warning">Warning</Badge></h3>
          <h4>Example heading <Badge className="me-2" color="success">Success</Badge></h4>
          <h5>Example heading <Badge className="me-2" color="danger">Danger</Badge></h5>
          <h6>Example heading <Badge className="me-2" color="secondary">Secondary</Badge></h6>
          <p>Badges can be used as part of links or buttons to provide a counter.</p>
          <Button color="primary">Notifications <Badge color="danger">4</Badge></Button>
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Pill <span className="fw-semi-bold">Badges</span></h5>}
          close collapse
        >
          <p className="mb-md">
            Use the <code>pill</code> property to make badges more rounded
            (with a larger border-radius and additional horizontal padding).
          </p>
          <Badge className="me-2 mt-md" color="primary" pill>Primary</Badge>
          <Badge className="me-2" color="info" pill>Info</Badge>
          <Badge className="me-2" color="warning" pill>Warning</Badge>
          <Badge className="me-2 mt-md" color="success" pill>Success</Badge>
          <Badge className="me-2" color="danger" pill>Danger</Badge>
          <Badge className="me-2" color="secondary" pill>Secondary</Badge>
          <Badge className="me-2 text-dark" color="light" pill>Light</Badge>
          <Badge className="me-2 mt-md" color="dark" pill>Dark</Badge>
        </Widget>
        <Widget
          title={<h5>Pill <span className="fw-semi-bold">Badges</span></h5>}
          close collapse
        >
          <p className="mb-md">
            Using the contextual <code>href=&quot;&#35;&quot;</code> classes on
            an <code>&lt;Badge&gt;</code> element quickly provide actionable badges with hover and focus states.
          </p>
          <Badge className="me-2 mt-md" href="#" color="primary">Primary</Badge>
          <Badge className="me-2" href="#" color="info">Info</Badge>
          <Badge className="me-2" href="#" color="warning">Warning</Badge>
          <Badge className="me-2 mt-md" href="#" color="success">Success</Badge>
          <Badge className="me-2" href="#" color="danger">Danger</Badge>
          <Badge className="me-2" href="#" color="secondary">Secondary</Badge>
          <Badge className="me-2 text-black" href="#" color="light">Light</Badge>
          <Badge className="me-2 mt-md" href="#" color="dark">Dark</Badge>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Badges;
