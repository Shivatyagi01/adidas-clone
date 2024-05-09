import React from "react";

const AllTags = () => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/data");
      setData(result.data.products);
      setTags(result.data.tags);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {tags.map((tag) => {
          const productsForTag = data.filter(
            (product) => product.category === tag
          );
          return (
            <div key={tag}>
              <h2>{tag}</h2>
              <div>
                {productsForTag.map((product) => (
                  <div key={product._id}>
                    <p>{product.name}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllTags;
