import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

function Blog(){
    
    return (
        <Layout>
            <Header/>
            <div className="Container">
                <h2 className="text-center mt-5 mb-3">
                    BlogPage
                </h2>
            </div>
        </Layout>
    )
};

export default Blog;