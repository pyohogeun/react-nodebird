import React, {useState,useCallback} from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

const Signup = () => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);
    
    const useInput = (initValue = null) => {
        const [value, setter] = useState(initValue);
        const handler = useCallback((e) => {
            setter(e.target.value);
        }, []);
        return [value, handler];
    }
    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if( password !== passwordCheck){
            return setPasswordError(true);
        }
        if( !term ){
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        })
    }, [password, passwordCheck, term]);
    
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    },[password]);
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);


    return (
        <>
            <Form onSubmit={onSubmit} style={{ padding: 10 }}>
                회원가입
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" value={password} type="password" required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input name="user-password-check" value={passwordCheck} type="password" required onChange={onChangePasswordCheck} />
                    {passwordError && <div style={{color: 'red'}}>비밀번호가 일치하지않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>말을 잘 듣겠다고 동의합니다.</Checkbox>
                    {termError && <div style={{color: 'red'}}>약관에 동의하셔야합니다.</div>}
                </div>
                <div>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </>
    )
}

export default Signup;