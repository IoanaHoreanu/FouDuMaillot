import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Article.css"

const ArticlesComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles-container">
      <h1>Articles</h1>
      <div>
        {articles.map(article => (
          <div className="article" key={article.id}>
            <h2>{article.titre}</h2>
            <p>{article.contenu}</p>
            <p className="price">Price: ${article.prix}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesComponent;
