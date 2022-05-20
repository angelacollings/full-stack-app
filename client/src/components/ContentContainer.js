import React, { useEffect, useState } from "react";
import ContentItem from "./ContentItem";
import api from "../api";

const ContentContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allContent, setAllContent] = useState([]);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [totalPages, setTotalPages] = useState(0);
  //   const limit = 20;

  useEffect(() => {
    // We use AbortController (https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
    // to clean up so that we don’t introduce a memory leak
    // (https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const result = await api.getAllContent();

        if (!result.ok) {
          throw new Error("API Error");
        }
        const contentData = await result.json();
        console.log(contentData);
        if (!abortController.signal.aborted) {
          setAllContent(contentData);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, []);

  return (
    <div className="content-container">
      <h2>Content</h2>
      {loading && <div>Loading content...</div>}
      {error && <div>Error fetching content</div>}
      <ul className="content-list">
        {allContent.map((content) => (
          <ContentItem
            key={content.content_id}
            description={content.description}
          />
        ))}
      </ul>
      {/* <PageControl
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      /> */}
    </div>
  );
};

export default ContentContainer;
