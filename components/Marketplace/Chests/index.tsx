import Image from "next/image";
import Link from "next/link";
import { Grid } from "semantic-ui-react";
import SectionInfo from "../SectionInfo";

const Chests = () => {
  return (
    <SectionInfo>
      <div className="gradient"></div>
      <Grid.Column className="image__container">
        <Image
          src="/assets/img/chest.png"
          alt="Chest image"
          className="section__info-img"
          width={2900}
          height={2200}
          quality={100}
          objectFit="contain"
        />
      </Grid.Column>
      <Grid.Column>
        <h2>Mystery Chests (Coming Soon)</h2>
        <p>
          The mysterious chests will contain some skins that you can get when
          you open them, you can get one skin per chest, the chests will be
          themed and will contain skins of the same theme, the skins of each
          chest will have a defined rarity, if you are lucky, you can get a very
          special skin. rare that you can use in the game or trade it on the
          market for a high price.
        </p>
        <Link href="https://facundo-lavagnino.gitbook.io/whitepaper/assets/chests-and-keys">
          <a target="__blank" className="info__btn">
            More info
          </a>
        </Link>
      </Grid.Column>
    </SectionInfo>
  );
};

export default Chests;
