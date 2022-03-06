import Image from "next/image";
import Link from "next/link";
import { Grid } from "semantic-ui-react";
import SectionInfo from "../SectionInfo";

const Passes = () => {
  return (
    <SectionInfo>
      <Grid>
        <Grid.Column
          className="image__container"
          computer={8}
          tablet={16}
          mobile={16}
        >
          <Image
            src="/assets/img/game-passes-v3.png"
            alt="Game passes"
            className="section__info-img"
            width={2920}
            height={2080}
            quality={100}
            objectFit="contain"
          />
        </Grid.Column>
        <Grid.Column computer={8} tablet={16} mobile={16}>
          <h2>
            Passes <span>(Coming Soon)</span>
          </h2>
          <p>
            The passes will allow you to enter the competitive mode to earn
            rewards, you can acquire them here with Lunary. Each pass will have
            a maximum number of games available, when you play all of them, the
            pass will expire and you will have to buy another one
          </p>
          <Link href="https://facundo-lavagnino.gitbook.io/whitepaper/assets/passes">
            <a target="__blank" className="info__btn">
              More info
            </a>
          </Link>
        </Grid.Column>
      </Grid>
    </SectionInfo>
  );
};

export default Passes;
