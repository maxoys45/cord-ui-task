import './App.scss'
import stories from './data/data.json'

function App() {
  console.log(stories)

  const truncateHeadlines = (string, stringLength = 4500) => {
    const truncated = string.substring(0, stringLength)

    return string.length > stringLength ? `${truncated}...` : string
  }

  return (
    <div className='App'>
      <ul className='stories'>
        {stories.map((story, index) => {
          return (
            <li className='stories__item story' key={index}>
              <a className='story__link' href={story.url}>
                <img className='story__img' src={story.thumbnail} />

                <div className='story__copy'>
                  <div className='story__category'>{story.category}</div>

                  <h2 className='story__headline'>
                    {truncateHeadlines(story.headline)}
                  </h2>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
