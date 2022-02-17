import { db, FirebaseTimestamp } from "../../firebase"
import { push } from "connected-react-router"
import { fetchProductsAction } from "./actions"

const ProductsRef = db.collection('products')

export const fetchProducts = () => {
return async(dispatch) => {
  ProductsRef.orderBy('updated_at', 'desc').get()
  .then(snapshots => {
    const productList = []
    snapshots.forEach( snapshot => {
      const product = snapshot.data();
      productList.push(product)
    })
    dispatch(fetchProductsAction(productList))
  })
}
}

export const saveProduct = (id, name, description, category, gender,price, images, sizes) => {
  return async (dispatch) => {
const timestamp = FirebaseTimestamp.now()

const data = {
  category: category,
  description: description,
  gender: gender,
  images: images,
  name: name,
  price: parseInt(price, 10),
  updated_at: timestamp,
  sizes: sizes,
}

if ( id === "") {
  const ref = ProductsRef.doc();
  id = ref.id
  data.id = id
  data.created_at = timestamp
}

return ProductsRef.doc(id).set(data, {merge: true})
.then( () => {
  dispatch(push('/'))
}).catch((error) => {
  throw new Error(error)
})
  }
}
