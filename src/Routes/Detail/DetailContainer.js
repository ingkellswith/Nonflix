import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";
import styled from "styled-components";
import { element } from "prop-types";

const IMGCONTAINER = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 3;
`;

const IMG = styled.img`
  width: 140px;
  height: 200px;
  border-radius: 5px;
  margin-right: 20px;
  z-index: 3;
  border: 0px;
`;

const DIVASCOLUMN = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CASTNAME = styled.span`
  margin: 10px 0px;
`;

const MOVIENAME = styled.span`
  margin: 20px 0px;
`;
const LOGONAME = styled.span`
  margin-bottom: 10px;
  display: block;
`;
const COUNTRIES = styled.div`
  margin-top: 30px;
  font-weight: 600;
  font-size: 50px;
`;
const COMPANYCONTAINER = styled.div`
  margin: 15px;
  ${LOGONAME} {
    padding: 10px;
    text-align: center;
  }
`;
const SEASON = styled.div`
  margin: 15px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      currentIndex: 0,
      setIndex: (index) => this.setState({ currentIndex: index }),
      cast: null,
    };
  } //constructor에서는 this.props를 쓰지 않음 super(props)때문인듯

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    let cast = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        ({ data: cast } = await moviesApi.cast(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        ({ data: cast } = await tvApi.cast(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result, cast });
      console.log(result, cast);
    }
  }

  render() {
    //console.log(this.props);
    const {
      result,
      error,
      loading,
      currentIndex,
      setIndex,
      cast,
      isMovie,
    } = this.state;
    const content = [
      {
        tab: "Cast",
        content: (
          <IMGCONTAINER>
            {cast &&
              cast.cast
                .filter((element, index) => index < 14)
                .map((person, index) => (
                  <>
                    <DIVASCOLUMN key={index}>
                      <IMG
                        src={
                          person.profile_path &&
                          `https://image.tmdb.org/t/p/w300/${person.profile_path}`
                        }
                        alt=""
                      ></IMG>
                      <CASTNAME>{person.name}</CASTNAME>
                    </DIVASCOLUMN>
                  </>
                ))}
          </IMGCONTAINER>
        ),
      },
      {
        tab: "Trailers",
        content: (
          <>
            <div>
              {result &&
                result.videos &&
                result.videos.results.map((element, index) => (
                  <DIVASCOLUMN key={index}>
                    <MOVIENAME>{element.name}</MOVIENAME>
                    <iframe
                      title={element.name}
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${element.key}`}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </DIVASCOLUMN>
                ))}
            </div>
          </>
        ),
      },
      {
        tab: "Companies",
        content: (
          <>
            <div>
              <IMGCONTAINER>
                {result &&
                  result.production_companies.map((element, index) => (
                    <COMPANYCONTAINER key={index}>
                      <img
                        alt=""
                        src={`https://image.tmdb.org/t/p/w200/${element.logo_path}`}
                      ></img>
                      <LOGONAME>{element.name}</LOGONAME>
                    </COMPANYCONTAINER>
                  ))}
              </IMGCONTAINER>
              <COUNTRIES>
                {result &&
                  result.production_countries.map((element, index) => (
                    <span key={index}>
                      {index === result.production_countries.length - 1
                        ? `${element.name} Presents`
                        : `${element.name} & `}
                    </span>
                  ))}
              </COUNTRIES>
            </div>
          </>
        ),
      },
    ];
    const contentTV = [
      {
        tab: "Cast",
        content: (
          <IMGCONTAINER>
            {cast &&
              cast.cast
                .filter((element, index) => index < 14)
                .map((person, index) => (
                  <>
                    <DIVASCOLUMN key={index}>
                      <IMG
                        src={
                          person.profile_path &&
                          `https://image.tmdb.org/t/p/w300/${person.profile_path}`
                        }
                        alt=""
                      ></IMG>
                      <CASTNAME>{person.name}</CASTNAME>
                    </DIVASCOLUMN>
                  </>
                ))}
          </IMGCONTAINER>
        ),
      },
      {
        tab: "Trailers",
        content: (
          <>
            <div>
              {result &&
                result.videos &&
                result.videos.results.map((element, index) => (
                  <DIVASCOLUMN key={index}>
                    <MOVIENAME>{element.name}</MOVIENAME>
                    <iframe
                      title={element.name}
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${element.key}`}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </DIVASCOLUMN>
                ))}
            </div>
          </>
        ),
      },
      {
        tab: "Companies",
        content: (
          <>
            <div>
              <IMGCONTAINER>
                {result &&
                  result.production_companies.map((element, index) => (
                    <COMPANYCONTAINER key={index}>
                      <img
                        alt=""
                        src={`https://image.tmdb.org/t/p/w200/${element.logo_path}`}
                      ></img>
                      <LOGONAME>{element.name}</LOGONAME>
                    </COMPANYCONTAINER>
                  ))}
              </IMGCONTAINER>
              <COUNTRIES>
                {result &&
                  result.production_countries.map((element, index) => (
                    <span key={index}>
                      {index === result.production_countries.length - 1
                        ? `${element.name} Presents`
                        : `${element.name} & `}
                    </span>
                  ))}
              </COUNTRIES>
            </div>
          </>
        ),
      },
      {
        tab: "Seasons",
        content: (
          <>
            <IMGCONTAINER>
              {result &&
                result.seasons.map((element, index) => (
                  <SEASON>
                    <img
                      key={index}
                      alt=""
                      src={`https://image.tmdb.org/t/p/w200/${element.poster_path}`}
                    ></img>
                    <div>{element.name}</div>
                  </SEASON>
                ))}
            </IMGCONTAINER>
          </>
        ),
      },
    ];
    return (
      <>
        {isMovie ? (
          <DetailPresenter
            result={result}
            error={error}
            loading={loading}
            currentIndex={currentIndex}
            content={content}
            setIndex={setIndex}
          />
        ) : (
          <DetailPresenter
            result={result}
            error={error}
            loading={loading}
            currentIndex={currentIndex}
            content={contentTV}
            setIndex={setIndex}
          />
        )}
      </>
    );
  }
}
