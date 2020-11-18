import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Row, Col } from "antd";
import Header from "../components/Header";

export default function List() {
  return (
    <div className={styles.container}>
      <Head>
        <title>List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <Button>按钮蚂蚁</Button> */}
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={16} xl={14}>
            左侧
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            右侧
          </Col>
        </Row>
      </div>
    </div>
  );
}
