import Link from "next/link";
import { Grid } from "semantic-ui-react";
import SectionInfo from "../SectionInfo";

const Passes = () => {
  return (
    <SectionInfo>
      <div className="gradient"></div>
      <Grid.Column>
        <img src="/assets/img/game-passes-v3.png" alt="Game passes" />
      </Grid.Column>
      <Grid.Column>
        <h2>Passes (Coming Soon)</h2>
        <p>
          The passes will allow you to enter the competitive mode to earn
          rewards, you can acquire them here with Lunary. Each pass will have a
          maximum number of games available, when you play all of them, the pass
          will expire and you will have to buy another one
        </p>
        <Link href="https://facundo-lavagnino.gitbook.io/whitepaper/assets/passes">
          <a target="__blank" className="info__btn">
            More info
          </a>
        </Link>
      </Grid.Column>
    </SectionInfo>
  );
};

export default Passes;
