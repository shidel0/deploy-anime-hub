import React, { useContext, useEffect, useState } from "react";
import "./Type.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { animeContext } from "../../ContextProvider/HomeContextProvider";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import searchPhoto from "../../Image/search.svg";
import LiveSearch from "../LiveSearch/LiveSearch";
import Filter from "../Filter/Filter";

const Type = () => {
  const { getAnime, animeArr, deleteAnime, getOneAnime, pageTotalCount } =
    useContext(animeContext);

  useEffect(() => {
    getAnime();
  }, []);

  let navigate = useNavigate();

  const edit = async (id) => {
    await getOneAnime(id);
    navigate(`/edit/${id}`);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const [type, setType] = useState(searchParams.get("type"));

  const paramsWithType = () => {
    return {
      category: type,
      q: searchParams.get("q") || "",
      _page: page,
      _limit: 6,
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q") || "",
      _page: page,
      _limit: 6,
    };
  };
  useEffect(() => {
    // getProducts();
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getAnime();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [searchParams, page]);
  return (
    <>
      {animeArr ? (
        <div className="mainDivHome">
          <div>
            <div className="seachDiv">
              <img className="searchPhoto" src={searchPhoto} alt="search" />
              <LiveSearch />
            </div>
          </div>

          <div>
            <div className="baelTask">
              <Filter type={type} setType={setType} />
              {animeArr.map((item) => (
                <div key={item.id}>
                  <Card
                    sx={{ maxWidth: 300, m: 1 }}
                    style={{
                      height: "500px",
                      backgroundColor: "rgb(60, 54, 54)",
                      color: "rgb(200, 175, 175)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      width={150}
                      height={250}
                      style={{ backgroundSize: "cover" }}
                      image={item.url}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary rgb(200, 175, 175)"
                      >
                        {item.desc.substring(0, 150)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" size="small">
                        watch
                      </Button>
                      <Button variant="contained" size="small">
                        Like
                      </Button>
                      <Button
                        onClick={() => {
                          deleteAnime(item.id);
                        }}
                        variant="contained"
                        color="error"
                        size="small"
                      >
                        🗑
                      </Button>

                      <Button
                        variant="contained"
                        color="warning"
                        size="small"
                        onClick={() => edit(item.id)}
                      >
                        ✍️
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </div>
            <Pagination
              count={+pageTotalCount}
              page={+page}
              variant="outlined"
              color="secondary"
              onChange={(e, pageVal) => {
                setPage(pageVal);
              }}
            />
          </div>

          <div className="mainDescUp">
            <div className="descUp">
              <h2>ANIHUB ONLINE - СМОТРЕТЬ АНИМЕ ОНЛАЙН</h2>
            </div>
            <p>
              Сегодня все хотят смотреть аниме онлайн, в особенности японских
              режиссеров. От обычных мультсериалов анимешки отличаются большей
              чувственностью героев и их эмоциональностью. В нашей базе AniHub
              Online вы сможете лучшие аниме смотреть онлайн в любое удобное
              время. Ведь что может быть лучше, чем после дневных забот включить
              любимую картину и хоть на некоторое время забыть обо всех
              хлопотах. К тому же, теперь не нужно ждать, пока скачается новая
              серия или пока ее покажут по телевизору. Все что вам понадобится –
              это выбрать онгоинг и можно приступать к просмотру.
            </p>
            <p>
              Особое внимание заслуживает и музыкальное сопровождение, которым
              так богаты лучшие аниме шедевры. Оно помогает зрителю
              прочувствовать все эмоции, которые испытывают герои в той или иной
              ситуации, сопереживать вместе с действующими лицами в случае
              неудач и радоваться их успехам. С каждым годом выходит все больше
              новых картин с более качественной графикой и спецэффектами. У нас
              вы сможете смотреть новые аниме 2022 сразу же после их выхода на
              экраны, при этом они будут в хорошем качестве и вам не понадобится
              регистрироваться. Вас ждут новые герои, неожиданные повороты
              сюжета, а также продолжения понравившихся сериалов, которые не
              оставят равнодушными ценителей этого жанра.
            </p>
            <p>
              Если вы еще не знаете, что посмотреть бесплатно и хотите узнать
              мнение других посетителей, то у нас есть топ аниме сериалов
              онлайн, который строится исходя из количества просмотров. Здесь вы
              сможете найти картину на любой вкус, например, кто-то предпочитает
              смотреть мастера меча онлайн, а кто-то картины драматического
              характера. Все это есть у нас на сайте! Вам нужно только сделать
              пару кликов мышкой и вместе с главными героями вы перенесетесь в
              их удивительный мир, полный приключений. Приятного просмотра.
            </p>
          </div>
          <div className="mainRulesForBigPeople">
            <div>
              <Link className="urlTextLink" to="/rules">
                Для правообладателей
              </Link>
              {"     "}
              <span className="usualTextLink">
                Или писать на почту admin@aniHub.online
              </span>
            </div>
            <span className="usualTextLink">AniHub Онлайн 2022 (18+)</span>
            {"     "}
            <a className="urlTextLink" href="/">
              Все аниме онлайн в одном месте
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Type;
