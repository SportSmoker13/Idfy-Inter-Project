import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../App.css";
import Graph from "./Graph";

//  function HomeMain() {

//     // const[data,setData] = useState()
//     let data;

//     const getData = async () => {
//         await axios.get('http://localhost:3001/').then((res)=>{
//             // setData(res.data)
//             // console.log(res.data);
//             let data = res.data
//         });
//     };

//     const [isLoading, setLoading] = useState(true);

//     useEffect(()=>{

//         getData().then(()=>{
//             setLoading(false)
//             console.log(data);
//         })

//     },[])

//     if (isLoading) {
//         return <div className="App">Loading...</div>;
//     } else {
//         return (
// <div className='homemain-outer'>
//     <div className='homemain-head'>
//         Home
//     </div>
//     <div className='homemain-subhead'>
//         Analytical Graphs
//     </div>
//     <div className='homemain-searchbox'>
//         <div className="wrap">
//             <div className="search">
//                 <input type="text" className="searchTerm" placeholder="Search Metric ..." />
//                 <button type="submit" className="searchButton">
//                     <AiOutlineSearch/>
//                 </button>
//             </div>
//         </div>
//     </div>
//     <div>
//         {/* {data.map(value=>{ */}
//             {/* <Graph data={data}/> */}
//         {/* })} */}

//     </div>
// </div>
//           )
//     }

// }

// export default HomeMain;

export default class HomeMain extends React.Component {
  state = {
    dataX: [],
    dataY: [],
    currentPage: 1,
    postsPerPage: 2,
    search: "",
  };
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    axios
      .get("http://localhost:3001")
      .then((data) => {
        this.setState({ dataX: data.data[0] });
        data.data.shift();
        this.setState({ dataY: data.data });
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  };

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.dataY.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    const pageNumbers = [];

    for (
      let i = 1;
      i <= Math.ceil(this.state.dataY.length / this.state.postsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const setPage = (pageNum) => {
      this.setState({ currentPage: pageNum });
    };
    return (
      <div>
        <div className="homemain-outer">
          <div className="homemain-head">Home</div>
          <div className="homemain-subhead">Analytical Graphs</div>
          <div className="homemain-searchbox">
            <div className="wrap">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="Search Metric ..."
                  onChange={(e) => this.setState({ search: e.target.value })}
                />
                <button type="submit" className="searchButton">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="graph-outer">
            {this.state.dataY.length === 0 ? (
              <div>Loading...</div>
            ) : this.state.search.length !== 0 ? (
              this.state.dataY
                ?.filter((el) =>
                  el[0].toLowerCase().includes(this.state.search.toLowerCase())
                )
                .map((e, key) => {
                  return (
                    <Graph dataNo={key} dataX={this.state.dataX} dataY={e} />
                  );
                })
            ) : (
              currentPosts.map((e, key) => {
                return (
                  <Graph dataNo={key} dataX={this.state.dataX} dataY={e} />
                );
              })
            )}
          </div>
          {this.state.search.length === 0 ? (
            <div className="pagination">
              {pageNumbers.map((pageNum, key) => (
                <span
                  key={key}
                  className={
                    pageNum === this.state.currentPage ? "active" : " "
                  }
                  onClick={() => {
                    setPage(pageNum);
                  }}
                >
                  {pageNum}
                </span>
              ))}
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </div>
    );
  }
}
