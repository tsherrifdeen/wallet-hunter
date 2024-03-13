import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const FooterDiv = () => {
  return (
    <Footer container className="text-white bg-transparent">
      <div className="w-full text-center">
        <div className="justify-end w-full sm:flex sm:items-center sm:justify-between">
          {/* <FooterBrand
            href=""
            src=""
            alt="Flowbite Logo"
            name="Wallet Hunter"
          /> */}
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Wallet Hunter" year={2022} />
      </div>
    </Footer>
  );
};

export default FooterDiv;
