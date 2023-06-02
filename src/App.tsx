import './App.css'
import { BsTrash3 } from 'react-icons/bs'
import { Avatar } from './components/avatar'

function App() {

  return (
    <div className="App">
      <div className='container'>

        <div className='box'></div>

        <div className='title'>
          <h2>Encontre <span className='cor'>Ana</span> no local de partida</h2>
          <p>Chega em 3 minutos (800 metros)</p>
        </div>

        <div className='main'>
          <div className='imagens'>
            <img className='imagem' src="https://s3-alpha-sig.figma.com/img/b82b/afa8/449faf84c1f575f28dfeb61ec90f5cc8?Expires=1686528000&Signature=JkEA1Yi54LBk2wsPWHxA6gkRrSEXRgaABgv51-XGhHqY5lelbRGjKDpTQtsLnDWr5byg0ZUVWrUaI3A4vJaUgwRHn35TQiY27nwrXmEqQ12CJYQdH7WQ07fe~LKFu8MMflw2kcA1sCgMrVdUabTqQYrFq5ueU-pNNa~~rFzxATQ8qUYc2FM32zX3g-CGwIpmkyOIeSZJd3B2qISyG6lZV1VTSDzmNg2mm2NHvogteg4GqP7O4GEIJIsFgAz4CumgEdkDz69qawQZPnaCzn1Ww5rHomTbd1KoCe-vzHXND1BR-Ul6Bb8hkAC-gK-wH5RUQuKW5Nue0hMKmlFK6x2Nkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
              <Avatar></Avatar>
          </div>
          <p className='nome'>Luis Felipe</p>

          <div className='sub-title'>
            <h2>BCD0D19</h2>
            <p>Honda Civic Roxo</p>
          </div>
        </div>

        <div className='mensagem'>
          <input type='text' className='area' placeholder='Enviar mensagem para Luis...'></input>
          <input type='submit' className='button' value='Publicar'></input>

          <a href=''><img src='src/assets/telephone.svg' className='telefone'></img></a>
          <a href=''><img src='src/assets/plus.svg' className='add'></img></a>
        </div>

        <div className='box-coment'>

          <img className='image' src="https://s3-alpha-sig.figma.com/img/1afa/bda4/0b7ca842e82cf6faa6aac8e2c9970d59?Expires=1686528000&Signature=oBYsW5A9SSLEoDUW23-GHOaPUMMMjW5CTBAXEWNk91EJtivQ95et5dd90C~GxT-RoFikfnhVO5LUJf7fFboOdkiRUywQO3dqxzg4rbZJFPGc5WBTLhO5b83ayGk-qUEjXzEstH4YvG8vSiENUrr~YrJx632QSOrofrz1ew5pUMACyVpjjEUedjuE2ZfiKk~jLoga6ffuuyO6lsQEWvtiuhW6s1GRxXvX5Us8koFxutKr0z6qP9JlfFPiQaMRJoiy68M~hsyioAuzR9-soQ7sM7twtnC6IPWMLCG6WdBySlbfXto~GcI1VMDgA4tg2DeRkmM3VVFGhMn7gauuhyUFTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <div className='text-coment'>
            <p>Luis eu ja estou no local já lhe esperando. estou com camisa azul e calça jeans</p>
          </div>
          <a href=''><BsTrash3 className='trash' /></a>
        </div>

        <div className='box-coment2'>

          <img className='image' src="https://avatars.githubusercontent.com/u/87948087?v=4" />
          <div className='text-coment'>
            <p>Acabei de lhe ver. Vou estacionar o carro próximo.</p>
          </div>
          <a href=''><BsTrash3 className='trash' /></a>
        </div>
      </div>
    </div>
  )
}

export default App
