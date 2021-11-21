const IDList = [];

const getID = () => {
  let id = Math.floor(Math.random() * 100000 + 100);

  if (IDList.includes(id)) {
    console.log('repeat');
    getID();
  } else {
    IDList.push(id);
    return id;
  }
};

export default getID;
