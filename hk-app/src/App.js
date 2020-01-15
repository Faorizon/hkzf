import React,{Component,Fragment} from 'react'
//引入axios
import axios from 'axios'
class App extends Component{
  componentDidMount(){
    axios.get("http://hkzf.zbztb.cn/home/swiper")
    .then(res=>{
      console.log(res)
    })
  }
  render(){
    return(
      <Fragment>
        <i className="iconfont icon-edit"></i>
      </Fragment>
    )
  }
}

export default App;
