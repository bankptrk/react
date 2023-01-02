// import { Tree,Row, Col } from 'antd';
// import React from 'react';
// import axios from 'axios';
// import data from './list.json';
// import './Tree.css';
// import 'antd/dist/antd.css';
// const { DirectoryTree } = Tree;


// class Treel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {image: "",data};
//   }
//   onSelect = (keys, info) => {
//     if(info.node.value){
//       axios.post('http://localhost:4000/image',{image:info.node.value}).then(respons=>this.setState({
//         image : respons.data
//       }));
//     }
//   };

//   render=()=>{
//     return (
//       <div className="body">
//         <Row>
//         <Col span={12}>
//           <div className="tree">
//               <DirectoryTree
//               onSelect={this.onSelect}
//               treeData={this.state.data}
//               />
//           </div>
//         </Col>
//         <Col span={12}>
//           <img src={`data:image/jpeg;base64,${this.state.image}`} width="500px"/>
//         </Col>
//         </Row>
//       </div>
//     );
//   }
// };
// export default Treel;