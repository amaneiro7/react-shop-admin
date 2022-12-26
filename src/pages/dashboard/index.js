import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@hooks/useAuth";
import { Chart } from '@common/Chart';
import endPoints from "@services/api";
import useFetch from "@hooks/useFetch";
import Pagination from '@components/Pagination';

const limit = 20
let offset = 0


export default function Dashboard() {  
  const router = useRouter();
  const auth = useAuth();
  const { length } = useFetch(endPoints.products.getAllProducts);  
  const productsAll = useFetch(endPoints.products.getAllProducts);  
  
  useEffect(() => {
    if (window.location.hash !== '') {
      const [_,hash] = window.location.hash.split('#');
      offset = limit * (hash-1)        
    }
    window.addEventListener('hashchange', () => {
      const [_,hash] = window.location.hash.split('#');
      offset = limit * (hash-1)
    });
  }, []);

    
  const products = useFetch(endPoints.products.getProducts(limit, offset));

  const categoryCount = productsAll?.map((product) => product.category.name);

  const reducer = (prev, curr) => {
    //prev es un acumulador y curr es el elemento actual del array que se recibe como parámetro,
    //es decir, un nombre de una categoría. 
    //La función .reduce() recorre todo el array, curr adquiere el valor de cada posición del array
    //prev[curr] es equivalente a tener obj[elemento]
    //Imaginemos el siguiente caso: 
    //prev = {shoes:1, others:3, clothes: 3}
    //Al hacer prev[curr] donde curr=shoes estámos llamando al valor del objeto prev cuya clave es shoes,
    //para este caso sería el valor de 1

    prev[curr] = ++prev[curr] || 1;
    //En la línea anterior accedemos al valor del objeto prev cuya clave es curr, recordemos que curr es 
    //un nombre de categoría que cambia con cada iteración. Si esa clave-valor no existe, como tiene un ||
    //entonces crea la clave-valor y le asigna el valor de 1, el primer conteo.
    //Si existe, entonces accede a ese valor y lo incrementa en 1, hace otro conteo*/

    return prev; //En cada iteración retornamos el objeto prev
  };

  /*Creamos la función para contar, en la función .reduce() pasamos nuestra función reducer y el valor inicial
    de prev que es un objeto vacío.
  */
  const countCategories = (array) => categoryCount.reduce(reducer, {});


  const data = {
    datasets: [
      {
      label: 'Categories',
      data: countCategories(categoryCount),
      borderWidth: 2,
      backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };
  
  // if (auth.user === null) {    
  //   router?.push('/login');   
  // }

  return (
    <>      
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
