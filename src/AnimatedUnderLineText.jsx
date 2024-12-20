
export function AnimatedUnderLineText(prop){
    return (
    <div style={styles.browseContainer}>
        <a href="#" style={{...styles.browseLink}}>
          {prop.Text}
          <span style={styles.arrow}>&rarr;</span>
          <span className="underline" style={{backgroundColor:prop.Color || 'black'}}></span>
        </a>
        <style>
          {`
            a {
              position: relative;
              text-decoration: none;
              font-weight: 500;
            }
  
            a .underline {
              position: absolute;
              left: 0;
              bottom: -2px;
              height: 2px;
              width: 0; 
              transition: width 0.3s ease-in-out;
            }
  
            a:hover .underline {
              width: 100%;
            }
          `}
        </style>
    </div>
    )
}

const styles = {
    // browseContainer: {
    //     marginTop: "10px",
    //   },
      browseLink: {
        display: "inline-block",
        position: "relative",
        fontSize: "14px",
        fontWeight: "500",
        color: "#000",
        cursor: "pointer",
        textDecoration: "none",
      },
      arrow: {
        marginLeft: "6px",
      },
}