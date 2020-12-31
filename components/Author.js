import { Avatar, Divider } from "antd";
import "../styles/components/author.css";
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="https://picsum.photos/300/301" />
      </div>

      <div className="author-introduction">
        Stay Hungry. Stay Foolish. I am an IT student aspiring to be a Full
        Stack Developer who comes from Whitireia Polytechnic NZ.
        <Divider>社交帐号</Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="<TwitterOutlined />" className="account" />
        <Avatar size={28} icon="wechat" className="account" />
      </div>
    </div>
  );
};

export default Author;
