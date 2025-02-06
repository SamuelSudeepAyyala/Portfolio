import * as angular from "angular";
import { NavbarComponent } from "./components/navbar.component";

const app = angular.module("helloApp", []);
app.component("nav-bar", new NavbarComponent());
