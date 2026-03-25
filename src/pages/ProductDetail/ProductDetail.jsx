import React, { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  async function getProductData() {
    try {
      const result = await getDoc(doc(db, "products", id));
      if (result.exists()) {
        setProduct({ id: result.id, ...result.data() });
      }
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  }

  async function getComments() {
    try {
      const res = await getDocs(collection(db, "products", id, "comments"));
      const commentsData = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setComments(commentsData);
    } catch (error) {
      console.log("Error fetching comments:", error);
    }
  }

  useEffect(() => {
    getProductData();
    getComments();
  }, [id]);

  async function handleAddComment() {
    if (!user) {
      Swal.fire({
        icon: "info",
        title: "Login required",
        text: "You must be logged in to write a comment.",
      });
      return;
    }
    if (newComment.trim() === "") return;

    try {
      await addDoc(collection(db, "products", id, "comments"), {
        userId: user.uid,
        userName: user.displayName || user.email,
        text: newComment,
        createdAt: serverTimestamp()
      });
      setNewComment("");
      getComments();
      Swal.fire({
        icon: "success",
        title: "Comment posted!",
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error) {
      console.log("Error posting comment:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to post comment!"
      });
    }
  }

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img src={product.image} alt={product.name} />
        </div>

        <div className={styles.infoSection}>
          <h2>{product.name}</h2>
          <p className={styles.price}>${product.price}</p>
          <p>{product.description}</p>
          {product.ingredients && product.ingredients.length > 0 && (
            <div className={styles.ingredients}>
              <h3>Ingredients</h3>
              <ul>
                {product.ingredients.map((ingredient, id) => (
                  <li key={id}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={styles.commentsSection}>
        <h2>Comments</h2>
        {!user && <h5>ⓘ You must be logged in to write a comment.</h5>}

        <div className={styles.addComment}>
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            disabled={!user}
            onKeyDown={(e) => {
              if (e.key === "Enter" && newComment.trim() !== "") {
                e.preventDefault();
                handleAddComment();
              }
            }}
          />
          <button onClick={handleAddComment} disabled={!user}>Post</button>
        </div>

        <div className={styles.commentList}>
          {comments.map((c) => (
            <div key={c.id} className={styles.comment}>
              <span className={styles.userName}>{c.userName}:</span> {c.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;