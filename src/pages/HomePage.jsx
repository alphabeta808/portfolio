import mySvg from '../images/man.svg';
import myImg from '../images/huge.png';
import '../index.css';


const HomePage = () => {
  return (
    <div className="App">
      <main className="flex h-screen tracking-widest">
        <div className="w-1/2 bg-white text-black">
          <div className="flex mx-auto mt-[25%] w-[50%] h-[50%]">
            <img src={mySvg} alt='mySvg'></img>
          </div>
          <div className="absolute top-3/4 w-2/4">
            <blockquote className="border-black border-2 rounded-xl w-2/3 p-3 mx-auto font-bold mt-2">
              <q>
                Ilmu Pengetahuan adalah Kehidupan Pikiran.
              </q>
              <p>
                - Abu Bakar Ash-Shiddiq
              </p>
            </blockquote>
          </div>
        </div>

        <div className="w-1/2 bg-black text-white">
          {/* Images Column */}
          <div className="flex justify-center mt-[20%]">
            <div className="flex-row">
              <div className="flex">
                <ul className="w-60">
                  <li><img src={myImg} alt="myImg"></img></li>
                </ul>
              </div>
              <div className="flex justify-center mt-5">
                <button class="bg-[#4a4a4a] hover:bg-yellow-900 border py-1 px-3 rounded-3xl font-bold text-lg">
                  See More
                </button>
              </div>
            </div>
          </div>

          <div className="absolute top-3/4">
            <blockquote className="border-2 rounded-xl w-3/4 p-2 mx-auto font-bold">
              <q>
                Everybody should learn to program a computer,
                because it teaches you how to think.
              </q>
              <p>
                - Steve Jobs 1995
              </p>
            </blockquote>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage