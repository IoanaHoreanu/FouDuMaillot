import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Article.css";

const ArticlesComponent = () => {
    const [articles, setArticles] = useState([]);
    const [newArticle, setNewArticle] = useState({ titre: '', contenu: '', prix: '' });
    const [editingId, setEditingId] = useState(null);
  
    useEffect(() => {
      fetchArticles();
    }, []);
  
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewArticle({ ...newArticle, [name]: value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post('http://localhost:4000/api/articles', newArticle);
        fetchArticles();
        setNewArticle({ titre: '', contenu: '', prix: '' });
      } catch (error) {
        console.error('Error creating article:', error);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:4000/api/articles/${id}`);
        fetchArticles();
      } catch (error) {
        console.error('Error deleting article:', error);
      }
    };
  
    const handleEdit = (id) => {
      const articleToEdit = articles.find(article => article.id === id);
      setNewArticle({ ...articleToEdit });
      setEditingId(id);
    };
  
    const handleUpdate = async () => {
      try {
        await axios.put(`http://localhost:4000/api/articles/${editingId}`, newArticle);
        setEditingId(null);
        fetchArticles();
        setNewArticle({ titre: '', contenu: '', prix: '' }); // Réinitialiser les valeurs des inputs
      } catch (error) {
        console.error('Error updating article:', error);
      }
    };

  return (
    <div>
      <h1>Articles</h1>
      <div className="article-container">
      <form onSubmit={handleSubmit}>
          <input type="text" name="titre" value={newArticle.titre} onChange={handleInputChange} placeholder="Titre" />
          <input type="text" name="contenu" value={newArticle.contenu} onChange={handleInputChange} placeholder="Contenu" />
          <input type="number" name="prix" value={newArticle.prix} onChange={handleInputChange} placeholder="Prix" />
          <button type="submit">Créer un article</button>
        </form>
        <div className="article-list">
          {articles.map(article => (
            <div className='article' key={article.id}>
              <h2>{article.titre}</h2>
              <p>{article.contenu}</p>
              <p>Price: ${article.prix}</p>
              <button onClick={() => handleDelete(article.id)}>Supprimer</button>
            {editingId === article.id ? (
              <button onClick={handleUpdate}>Enregistrer</button>
            ) : (
              <button onClick={() => handleEdit(article.id)}>Modifier</button>
            )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesComponent;
