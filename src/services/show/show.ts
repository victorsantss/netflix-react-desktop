import axiosInstance from 'modules/axios/axios';
import { Props, ShowId } from 'services/show/show.type';

const showService = ({ token }: Props) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getShowInfo = (showId: ShowId) => axiosInstance.get(`/shows/${showId}`, config);

  return {
    getShowInfo,
  };
};

export default showService;
