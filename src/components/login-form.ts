import Component from '../abstract/component';
import { customElement } from '../decorators/decortators';
import { login } from '../member';
import Router from '../router';
import { EventOnElement } from '../types';

@customElement('login-form')
class LoginForm extends Component {
  template(): string {
    return `
    <h1 class="mb-12">로그인</h1>
    <form onsubmit="return false" class="login-form d-flex">
      <label type="email" for="email" class="mb-1">이메일</label>
      <input placeholder="woowacourse@gmail.com" name="email" class="form-control mb-4" />
      <label for="password" class="mb-1">비밀번호</label>
      <input type="password" placeholder="비밀번호를 입력해 주세요" name="password" class="form-control mb-8" />
      <button type="button" class="btn btn-primary mb-3">확인</button>
      <label>
        아직 회원이 아니신가요?
        <span class="sign-up-link"> 회원가입 </span>
      </label>
    </form>
    `;
  }

  setEvent() {
    this.addEvent('click', 'button', this.onClickLoginConfirmBtn);
    this.addEvent('click', '.sign-up-link', this.onClickSignUpLink);
    this.addEvent('keyup', 'input', this.onPressEnter);
  }

  onClickLoginConfirmBtn = () => {
    const [$email, $password] = this.querySelectorAll('input');
    const email = $email.value;
    const password = $password.value;

    login(email, password);
  };

  onPressEnter = ({ key }: EventOnElement) => {
    if (key === 'Enter') this.onClickLoginConfirmBtn();
  };

  onClickSignUpLink = () => {
    Router.pushState('/sign-up-form');
  };
}

export default LoginForm;
