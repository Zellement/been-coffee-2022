import { StaticQuery, graphql } from "gatsby"
import React from "react"
import { IoIosStar } from "react-icons/io"

import { BsFacebook } from "react-icons/bs"
import { FaTripadvisor } from "react-icons/fa"
import { AiFillGoogleCircle } from "react-icons/ai"

export default function Reviews() {
  return (
    <StaticQuery
      query={graphql`
        query Reviews {
          allGoogleReview(
            filter: { rating: { gte: 4 } }
            sort: { fields: time, order: DESC }
          ) {
            edges {
              node {
                id
                time
                sourceImage
                author_name
                rating
                text
                sourceLink
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="container w-full my-32">
          <h2 className="mb-12 text-2xl text-center">
            Latest Reviews from{" "}
            <a
              href="https://www.google.com/search?q=been+coffee&rlz=1C1CHBF_en-GBGB838GB838&oq=been+coffee&aqs=chrome..69i57j46i512l2j0i10i512j0i512j69i60l2j69i61.1931j0j4&sourceid=chrome&ie=UTF-8#lrd=0x4879f76a544386ad:0xdd73c388e6606809,1,,,"
              target="_blank"
              className="hover:lg:underline"
              rel="noopener noreferrer"
            >
              Google
            </a>
          </h2>
          {console.log(data)}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {data.allGoogleReview.edges.map((review) => {
              return (
                <div
                  className="relative flex flex-col"
                  key={review.node.author_name}
                >
                  <div className="flex flex-row items-center gap-8 mb-8">
                    <img className="w-16 h-16 " src={review.node.sourceImage} />
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center text-butterscotch-500">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                      </div>
                      <p>{review.node.author_name}</p>
                    </div>
                  </div>
                  <p
                    className="text-xs"
                    dangerouslySetInnerHTML={{ __html: review.node.text }}
                  ></p>
                  <p className="mt-4 text-2xs">
                    {timeConverter(review.node.time)}
                  </p>
                </div>
              )
            })}
            <div className="relative flex flex-col text-white bg-tuscany-500">
              <div className="m-auto">
                <h3 className="text-xl">See more reviews</h3>
                <div className="flex flex-row items-center justify-center gap-4">
                  <a
                    target="_blank"
                    className="transition duration-300 hover:text-navy-500"
                    rel="noopener noreferrer"
                    href="https://www.google.com/search?q=been+coffee&rlz=1C1CHBF_en-GBGB838GB838&oq=been+coffee&aqs=chrome..69i57j46i512l2j0i10i512j0i512j69i60l2j69i61.1931j0j4&sourceid=chrome&ie=UTF-8#lrd=0x4879f76a544386ad:0xdd73c388e6606809,1,,,"
                  >
                    <span className="sr-only">Google</span>
                    <AiFillGoogleCircle className="w-12 h-auto" />
                  </a>
                  <a
                    target="_blank"
                    className="transition duration-300 hover:text-navy-500"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/beencoffeeuk/reviews/"
                  >
                    <span className="sr-only">Facebook</span>{" "}
                    <BsFacebook className="block w-10 h-auto" />
                  </a>
                  <a
                    target="_blank"
                    className="transition duration-300 hover:text-navy-500"
                    rel="noopener noreferrer"
                    href="https://www.tripadvisor.co.uk/Restaurant_Review-g1234748-d23838579-Reviews-Been_Coffee-Willington_Derbyshire_England.html#REVIEWS"
                  >
                    <span className="sr-only">Tripdvisor</span>
                    <FaTripadvisor className="h-14 w-14" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
}

function timeConverter(unixTimestamp) {
  var a = new Date(unixTimestamp * 1000)
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  var min = a.getMinutes()
  if (min === 0) {
    min = "00"
  }
  var time = +date + " " + month + " " + year
  return time
}
