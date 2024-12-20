import { AnimatedUnderLineText } from "../AnimatedUnderLineText";
const CategoryList = ({title="Electronics",items=['Wireless Speaker','Tablet','Smartphone','Laptop','iMac','Game Controller','Drone','Apple']}) => {  
    return (
      <div style={styles.card}>
        {/* Title */}
        <h2 style={styles.title}>{title}</h2>
        {/* Category Items */}
        <ul style={styles.list}>{items.map(item=><li style={styles.item}>{item}</li>)}</ul>
        <AnimatedUnderLineText Text={'Browse All'} />
      </div>
    );
  };
  
  const styles = {
    card: {
      width: "80%",
      height: "100%",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "20px",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      marginBottom: "20px",
    },
    item: {
      marginBottom: "8px",
      fontSize: "14px",
      color: "#333",
      cursor: "pointer",
    },

  };
  
  export default CategoryList;