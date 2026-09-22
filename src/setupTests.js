import "@testing-library/jest-dom";
import fetch from "node-fetch";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

if (!global.fetch) {
  global.fetch = fetch;
}
