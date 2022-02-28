import Link from "next/link";
import { Grid } from "semantic-ui-react";
import SectionInfo from "../SectionInfo";

const Skins = () => {
  return (
    <SectionInfo>
      <div className="gradient"></div>
      <Grid.Column>
        <img
          src="/assets/img/players.png"
          alt="Players image"
          className="players__img"
        />
      </Grid.Column>
      <Grid.Column>
        <h2>Skins (Coming Soon)</h2>
        <p>
          The skins are assets that you can get to differentiate yourself from
          other players, they are NFT so they will be 100% your property, you
          can get skins in the market by buying them from another player or
          getting them in a mysterious chest, if you are lucky, you can get a
          skin very strange.
        </p>
        <Link href="https://facundo-lavagnino.gitbook.io/whitepaper/assets/chests-and-keys/skins-and-effects">
          <a target="__blank" className="info__btn">
            More info
          </a>
        </Link>
      </Grid.Column>
    </SectionInfo>
  );
};

export default Skins;
