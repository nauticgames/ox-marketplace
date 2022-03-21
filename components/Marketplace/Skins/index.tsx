import Image from "next/image";
import Link from "next/link";
import { Grid } from "semantic-ui-react";
import SectionInfo from "../SectionInfo";

const Skins = () => {
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
            src="/assets/img/skins.png"
            alt="Players image"
            className="section__info-img"
            width={2300}
            height={1400}
            quality={100}
            objectFit="contain"
          />
        </Grid.Column>
        <Grid.Column computer={8} tablet={16} mobile={16}>
          <h2>
            Skins <span>(Coming Soon)</span>
          </h2>
          <p>
            The skins are assets that you can get to differentiate yourself from
            other players, they are NFT so they will be 100% your property, you
            can get skins in the market by buying them from another player or
            getting them in a mysterious chest, if you are lucky, you can get a
            skin very strange.
          </p>
          <Link href="https://docs.nauticgames.com/assets/skins-and-effects">
            <a target="__blank" className="info__btn">
              More info
            </a>
          </Link>
        </Grid.Column>
      </Grid>
    </SectionInfo>
  );
};

export default Skins;
